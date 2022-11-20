import { endpoints } from "../../endpoints/endpoints";

export const timestampConverter = (timestampValue) => {
  return cy
    .request({
      method: "GET",
      url: `${Cypress.config().baseUrl}${
        endpoints.TIMESTAMP_CONVERTER
      }?cached&s=${timestampValue}`,
      headers: {
        "Content-Type": "application/json",
      },
      failOnStatusCode: false,
    })
    .then((res) => {
      return res;
    });
};
