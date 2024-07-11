class Result {
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

class SuccessResult extends Result {
    constructor(message = null, data= null) {
        super(true, message, data);
    }
}

class ErrorResult extends Result {
    constructor(message = null, data= null) {
        super(true, message, data);
    }
}

module.exports = {
    SuccessResult,
    ErrorResult,
    Result
}