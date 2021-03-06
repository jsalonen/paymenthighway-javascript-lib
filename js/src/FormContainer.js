"use strict";
class FormContainer {
    constructor(method, baseUrl, actionUrl, nameValuePairs, requestId) {
        this.method = method;
        this.baseUrl = baseUrl;
        this.actionUrl = actionUrl;
        this.nameValuePairs = nameValuePairs;
        this.requestId = requestId;
    }
    getAction() {
        return this.baseUrl + this.actionUrl;
    }
}
exports.FormContainer = FormContainer;
//# sourceMappingURL=FormContainer.js.map