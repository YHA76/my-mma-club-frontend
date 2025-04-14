import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InscriptionForm from "../components/InscriptionForm";

// On mock le composant reCAPTCHA pour éviter toute dépendance externe lors des tests
jest.mock("react-google-recaptcha", () => {
  return function DummyReCAPTCHA() {
    return <div data-testid="recaptcha-mock" />;
  };
});

describe("InscriptionForm", () => {
  // Test 1 : Vérifie que les champs texte réagissent correctement aux changements
  test("les champs texte se remplissent correctement", () => {
    render(<InscriptionForm />);

    const nomInput = screen.getAllByPlaceholderText(/Nom/i)[0];
    const prenomInput = screen.getAllByPlaceholderText(/Prénom/i)[0];
    const emailInput = screen.getAllByPlaceholderText(/Email/i)[0];

    fireEvent.change(nomInput, { target: { value: "Test" } });
    fireEvent.change(prenomInput, { target: { value: "Test12" } });
    fireEvent.change(emailInput, {
      target: { value: "letest@test.test" },
    });

    expect(nomInput.value).toBe("Test");
    expect(prenomInput.value).toBe("Test12");
    expect(emailInput.value).toBe("letest@test.test");
  });

  // Test 2 : Vérifie que le champ photo accepte bien un fichier image
  test("le champ photo accepte un fichier", () => {
    render(<InscriptionForm />);
    const fileInput = screen.getByLabelText(/Photo/i);
    const file = new File(["image"], "photo.jpg", { type: "image/jpeg" });
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(fileInput.files[0]).toBe(file);
    expect(fileInput.files).toHaveLength(1);
  });

  // Test 3 : Vérifie que le champ de sélection du paiement fonctionne
  test("le champ moyen de paiement est sélectionnable", () => {
    render(<InscriptionForm />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Carte bancaire" } });

    expect(select.value).toBe("Carte bancaire");
  });
});

// Test 4 : Vérifie que le reCAPTCHA est présent
test("le reCAPTCHA est présent", () => {
  render(<InscriptionForm />);
  const recaptcha = screen.getByTestId("recaptcha-mock");
  expect(recaptcha).toBeInTheDocument();
});
