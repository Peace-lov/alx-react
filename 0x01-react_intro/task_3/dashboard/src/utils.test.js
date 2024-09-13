import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("should return current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });
  describe("getFooterCopy", function () {
    const Tmsg = "Holberton School";
    const Fmsg = "Holberton School main dashboard";

    it("Should return true message", function () {
      const message = getFooterCopy(true);
      expect(message).toEqual(Tmsg);
    });
    it("Should return false message", function () {
      const message = getFooterCopy(false);
      expect(message).toEqual(Fmsg);
    });
  });
  describe("getLatestNotification", function () {
    it("should return correct string element", function () {
      const elm = "<strong>Urgent requirement</strong> - complete by EOD";
      expect(getLatestNotification()).toEqual(elm);
    });
  });
});