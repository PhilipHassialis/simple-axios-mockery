import { render, screen, act } from "@testing-library/react";
import App from "./App";
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


describe("renders 2 facts instead of ten because I mock it", () => {

  const mock = new MockAdapter(axios);
  mock
  .onGet("https://api.spaceflightnewsapi.net/v3/articles?_limit=10")
  .reply(200, [{title:"AAA"} , {title:"BBB"}]);

  it("should render the app with 2 random data", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText('AAA')).toBeInTheDocument();
  });
});
