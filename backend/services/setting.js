const baseServices = require('./baseService')
const {DATABASE_KEYS, OPERATION_MESSAGES} = require('../utils/constant')
const {SuccessResult, ErrorResult} = require("../utils/result");
const Setting = require('../models/setting');

const getSettings = async () => {
    const data = await baseServices.getGenericTableData(DATABASE_KEYS.SETTINGS)
    return new SuccessResult(null, data)
}

/**
 * 
 * @param {Setting} setting 
 * @returns 
 */
const addSettings = async (setting) => {
    const addedSetting = await baseServices.addModelToTable(DATABASE_KEYS.SETTINGS, setting)
    return new SuccessResult(OPERATION_MESSAGES.ADDED, addedSetting)
}

const deleteSetting = async (id) => {
    try {
        await baseServices.deleteModelFromTable(DATABASE_KEYS.SETTINGS, id);
        return new SuccessResult(OPERATION_MESSAGES.DELETED, null);
    } catch (error) {
        return new ErrorResult(OPERATION_MESSAGES.ERROR, error.message);
    }
}

/**
 * 
 * @param {Setting} setting 
 * @returns 
 */
const updateSetting = async (setting) => {
    try {
        const updatedSetting = await baseServices.updateModel(DATABASE_KEYS.SETTINGS, setting);
        return new SuccessResult(OPERATION_MESSAGES.UPDATED, updatedSetting);
    } catch (error) {
        return new ErrorResult(OPERATION_MESSAGES.ERROR, error.message);
    }
}

module.exports = {
    getSettings,
    addSettings,
    deleteSetting,
    updateSetting
}