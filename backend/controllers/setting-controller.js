const settingService = require("../services/setting");
const { generateResponse, parseRequestBody } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const ResponseConfig = require("../utils/responseConfig");
const Setting = require('../models/setting')

const getSettings = async (req, res) => {
  const response = await settingService.getSettings();

  generateResponse(
    new ResponseConfig(
      200,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(response)
    )
  );
};

const createSetting = async (req, res) => {
    const body = await parseRequestBody(req)
    const setting = new Setting(body)
    const result = await settingService.addSettings(setting);

    generateResponse(
        new ResponseConfig(
          201,
          req,
          res,
          CONTENT_TYPES[".json"],
          JSON.stringify(result)
        )
      );
}

const deleteSetting = async (req, res, id) => {
  const result = await settingService.deleteSetting(id);

  generateResponse(
      new ResponseConfig(
        result.success ? 200 : 400,
        req,
        res,
        CONTENT_TYPES[".json"],
        JSON.stringify(result)
      )
    );
}

const updateSetting = async (req, res, id) => {
  const body = await parseRequestBody(req);
  const setting = { id, ...body };
  const result = await settingService.updateSetting(setting);

  generateResponse(
      new ResponseConfig(
        result.success ? 200 : 400,
        req,
        res,
        CONTENT_TYPES[".json"],
        JSON.stringify(result)
      )
    );
}
module.exports = {
    getSettings,
    createSetting,
    deleteSetting,
    updateSetting
}