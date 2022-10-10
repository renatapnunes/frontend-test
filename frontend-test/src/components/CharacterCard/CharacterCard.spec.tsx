import { screen } from "@testing-library/react";
import { TypedUseSelectorHook } from "react-redux";

import { useAppSelector } from "@/hooks";
import { RootState } from "@/redux/store";
import { character } from "@/tests/mock";
import renderWithRouter from "@/tests/renderWithRouter";
import { testUseAppSelector } from "@/tests/testAppSelector";

import CharacterCard from "./index";

jest.mock("@/hooks");

const mokedUseAppSelector = useAppSelector as jest.Mock<
  TypedUseSelectorHook<RootState>
>;

// eslint-disable-next-line jest/no-disabled-tests
describe.skip("Character card test", () => {
  beforeEach(() => {
    mokedUseAppSelector.mockImplementation(testUseAppSelector);
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  it("should render character info", () => {
    renderWithRouter(<CharacterCard character={character} />);

    const nameMovie = "Kiki's Delivery Service";

    const name = screen.getByTestId("character-title");
    const specie = screen.getByText(`Specie: ${character.specie.name}`);
    const gender = screen.getByText(`Gender: ${character.gender}`);
    const age = screen.getByText(`Age: ${character.age}`);
    const movies = screen.getAllByTestId("movie-title");

    expect(name).toHaveTextContent(character.name);
    expect(specie).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(movies[0]).toHaveTextContent(nameMovie);
  });
});
