var schemas = require("../schemas/unix-converter-schemas");
import { timestampConverter } from "../bots/unix-converter-bot";
var options = require("../../joi-options");
const Joi = require("../../joi");

describe("tests", () => {
  it("check unix to date string conversion sanity + schema", () => {
    timestampConverter(1451613802).then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        Joi.assert(res.body, schemas.UNIX_TO_STRING_SCHEMA, options); //check if the schema of the returned response is correct
        expect(res.body).to.eq("2016-01-01 02:03:22"); // extra sanity check as we know what the exact result should be
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check date string to unix conversion sanity + schema", () => {
    timestampConverter("2016-01-01%202:3:22").then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        Joi.assert(res.body, schemas.STRING_TO_UNIX_SCHEMA, options); //check if the schema of the returned response is correct
        expect(res.body).to.eq(1451613802); // extra sanity check as we know what the exact result should be
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check unix to date string conversion with string int", () => {
    timestampConverter("1451613802").then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        Joi.assert(res.body, schemas.UNIX_TO_STRING_SCHEMA, options); //check if the schema of the returned response is correct
        expect(res.body).to.eq("2016-01-01 02:03:22"); // extra sanity check as we know what the exact result should be
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with invalid string", () => {
    timestampConverter("asdasd").then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        expect(res.body).to.eq(false); // check if response is equal to false
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with empty string value", () => {
    timestampConverter("").then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        expect(res.body).to.eq(false);
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with zero (0) int value", () => {
    timestampConverter(0).then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        expect(res.body).to.eq("1970-01-01 12:00:00"); // check if response is the correct date for 0
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with negative value", () => {
    timestampConverter(-1).then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        Joi.assert(res.body, schemas.UNIX_TO_STRING_SCHEMA, options); // check for correct schema
        expect(res.body).to.eq("1969-12-31 11:59:59"); // check if the date is correct for -1 value
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with incorrect(different) date string format", () => {
    timestampConverter("2016/01/01%202:3:22").then((res) => {
      // instead of dash(-), date is sent with slash (/)
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        Joi.assert(res.body, schemas.STRING_TO_UNIX_SCHEMA, options); //check if the schema of the returned response is correct
        expect(res.body).to.eq(1451613802);
        expect(res.duration).not.to.be.null;
      }
    });
  });

  it("check conversion with unsupported special characters", () => {
    timestampConverter("1234$").then((res) => {
      console.log("RESSS ", res);
      if (res.status != 200) {
        throw new Error(
          "Test failed with status code " +
            res.status +
            " and error message '" +
            res.body.message +
            "'"
        );
      } else {
        expect(res.status).to.eq(200);
        expect(res.body).to.eq(false);
        expect(res.duration).not.to.be.null;
      }
    });
  });
});
