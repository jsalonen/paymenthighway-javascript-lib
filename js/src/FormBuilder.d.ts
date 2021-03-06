import { Method } from './util/Method';
import { FormContainer } from './FormContainer';
/**
 * Creates parameters that can used on the form that sends them to
 * Payment Highway.
 *
 * Creates a request id, timestamp and signature based on request parameters.
 */
export declare class FormBuilder {
    private method;
    private signatureKeyId;
    private signatureSecret;
    private account;
    private merchant;
    private baseUrl;
    private static FORM_API_VERSION;
    private static SPH_API_VERSION;
    private static SPH_ACCEPT_CVC_REQUIRED;
    private static SPH_ACCOUNT;
    private static SPH_MERCHANT;
    private static SPH_AMOUNT;
    private static SPH_CURRENCY;
    private static SPH_ORDER;
    private static SPH_SUCCESS_URL;
    private static SPH_FAILURE_URL;
    private static SPH_CANCEL_URL;
    private static SPH_REQUEST_ID;
    private static SPH_TIMESTAMP;
    private static SPH_TOKEN;
    private static SPH_SKIP_FORM_NOTIFICATIONS;
    private static SPH_EXIT_IFRAME_ON_RESULT;
    private static SPH_EXIT_IFRAME_ON_THREE_D_SECURE;
    private static SPH_USE_THREE_D_SECURE;
    private static LANGUAGE;
    private static DESCRIPTION;
    private static SIGNATURE;
    private secureSigner;
    constructor(method: Method, signatureKeyId: string, signatureSecret: string, account: string, merchant: string, baseUrl: string);
    /**
     * Get parameters for Add Card request with the possibility to
     * <li>accept cards that require CVC</li>
     * <li>skip notifications displayed on the Payment Highway form</li>
     * <li>exit from iframe after a result</li>
     * <li>exit from iframe when redirecting the user to 3DS.</li>
     * <li>force enable/disable 3ds</li>
     *
     * @param successUrl            The URL the user is redirected after the transaction is handled. The payment itself may still be rejected.
     * @param failureUrl            The URL the user is redirected after a failure such as an authentication or connectivity error.
     * @param cancelUrl             The URL the user is redirected after cancelling the transaction (clicking on the cancel button).
     * @param language              The language the form is displayed in.
     * @param acceptCvcRequired     Accept a payment card token even if the card requires CVC for payments. May be null.
     * @param skipFormNotifications Skip notifications displayed on the Payment Highway form. May be null.
     * @param exitIframeOnResult    Exit from iframe after a result. May be null.
     * @param exitIframeOn3ds       Exit from iframe when redirecting the user to 3DS. May be null.
     * @param use3ds                Force enable/disable 3ds. Null to use default configured parameter.
     * @returns {FormContainer}
     */
    generateAddCardParameters(successUrl: string, failureUrl: string, cancelUrl: string, language: string, acceptCvcRequired?: boolean, skipFormNotifications?: boolean, exitIframeOnResult?: boolean, exitIframeOn3ds?: boolean, use3ds?: boolean): FormContainer;
    /**
     * Get parameters for Payment request with the possibility to
     * <li>skip notifications displayed on the Payment Highway form</li>
     * <li>exit from iframe after a result</li>
     * <li>exit from iframe when redirecting the user to 3DS.</li>
     * <li>force enable/disable 3ds</li>
     *
     * @param successUrl            The URL the user is redirected after the transaction is handled. The payment itself may still be rejected.
     * @param failureUrl            The URL the user is redirected after a failure such as an authentication or connectivity error.
     * @param cancelUrl             The URL the user is redirected after cancelling the transaction (clicking on the cancel button).
     * @param language              The language the form is displayed in.
     * @param amount                The amount to pay.
     * @param currency              In which currency is the amount, e.g. "EUR"
     * @param orderId               A generated order ID, may for example be always unique or used multiple times for recurring transactions.
     * @param description           Description of the payment shown in the form.
     * @param skipFormNotifications Skip notifications displayed on the Payment Highway form. May be null.
     * @param exitIframeOnResult    Exit from iframe after a result. May be null.
     * @param exitIframeOn3ds       Exit from iframe when redirecting the user to 3DS. May be null.
     * @param use3ds                Force enable/disable 3ds. Null to use default configured parameter.
     * @returns {FormContainer}
     */
    generatePaymentParameters(successUrl: string, failureUrl: string, cancelUrl: string, language: string, amount: number, currency: string, orderId: string, description: string, skipFormNotifications?: boolean, exitIframeOnResult?: boolean, exitIframeOn3ds?: boolean, use3ds?: boolean): FormContainer;
    /**
     * Get parameters for Add Card and Pay request with the possibility to
     * <li>skip notifications displayed on the Payment Highway form</li>
     * <li>exit from iframe after a result</li>
     * <li>exit from iframe when redirecting the user to 3DS.</li>
     * <li>force enable/disable 3ds</li>
     *
     * @param successUrl            The URL the user is redirected after the transaction is handled. The payment itself may still be rejected.
     * @param failureUrl            The URL the user is redirected after a failure such as an authentication or connectivity error.
     * @param cancelUrl             The URL the user is redirected after cancelling the transaction (clicking on the cancel button).
     * @param language              The language the form is displayed in.
     * @param amount                The amount to pay.
     * @param currency              In which currency is the amount, e.g. "EUR"
     * @param orderId               A generated order ID, may for example be always unique or used multiple times for recurring transactions.
     * @param description           Description of the payment shown in the form.
     * @param skipFormNotifications Skip notifications displayed on the Payment Highway form. May be null.
     * @param exitIframeOnResult    Exit from iframe after a result. May be null.
     * @param exitIframeOn3ds       Exit from iframe when redirecting the user to 3DS. May be null.
     * @param use3ds                Force enable/disable 3ds. Null to use default configured parameter.
     * @return {FormContainer}
     */
    generateAddCardAndPaymentParameters(successUrl: string, failureUrl: string, cancelUrl: string, language: string, amount: number, currency: string, orderId: string, description: string, skipFormNotifications?: boolean, exitIframeOnResult?: boolean, exitIframeOn3ds?: boolean, use3ds?: boolean): FormContainer;
    /**
     * Get parameters for Pay with Token and CVC request with the possibility to
     * <li>skip notifications displayed on the Payment Highway form</li>
     * <li>exit from iframe after a result</li>
     * <li>exit from iframe when redirecting the user to 3DS.</li>
     * <li>force enable/disable 3ds</li>
     *
     * @param token                 The card token to charge from.
     * @param successUrl            The URL the user is redirected after the transaction is handled. The payment itself may still be rejected.
     * @param failureUrl            The URL the user is redirected after a failure such as an authentication or connectivity error.
     * @param cancelUrl             The URL the user is redirected after cancelling the transaction (clicking on the cancel button).
     * @param language              The language the form is displayed in.
     * @param amount                The amount to pay.
     * @param currency              In which currency is the amount, e.g. "EUR"
     * @param orderId               A generated order ID, may for example be always unique or used multiple times for recurring transactions.
     * @param description           Description of the payment shown in the form.
     * @param skipFormNotifications Skip notifications displayed on the Payment Highway form. May be null.
     * @param exitIframeOnResult    Exit from iframe after a result. May be null.
     * @param exitIframeOn3ds       Exit from iframe when redirecting the user to 3DS. May be null.
     * @param use3ds                Force enable/disable 3ds. Null to use default configured parameter.
     * @returns {FormContainer}
     */
    generatePayWithTokenAndCvcParameters(token: string, successUrl: string, failureUrl: string, cancelUrl: string, language: string, amount: number, currency: string, orderId: string, description: string, skipFormNotifications?: boolean, exitIframeOnResult?: boolean, exitIframeOn3ds?: boolean, use3ds?: boolean): FormContainer;
    /**
     * Get parameters for MobilePay request.
     *
     * @param successUrl The URL the user is redirected after the transaction is handled. The payment itself may still be rejected.
     * @param failureUrl The URL the user is redirected after a failure such as an authentication or connectivity error.
     * @param cancelUrl The URL the user is redirected after cancelling the transaction (clicking on the cancel button).
     * @param language The language the form is displayed in.
     * @param amount The amount to pay.
     * @param currency In which currency is the amount, e.g. "EUR"
     * @param orderId A generated order ID, may for example be always unique or used multiple times for recurring transactions.
     * @param description Description of the payment shown in the form.
     * @param exitIframeOnResult Exit from iframe after a result. May be null.
     * @return FormContainer
     */
    generatePayWithMobilePayParameters(successUrl: string, failureUrl: string, cancelUrl: string, language: string, amount: number, currency: string, orderId: string, description: string, exitIframeOnResult?: boolean): FormContainer;
    /**
     *
     * @param successUrl
     * @param failureUrl
     * @param cancelUrl
     * @param language
     * @param requestId
     * @returns {Pair[]}
     */
    private createCommonNameValuePairs(successUrl, failureUrl, cancelUrl, language, requestId);
    /**
     *
     * @param uri
     * @param nameValuePairs
     * @returns {string}
     */
    private createSignature(uri, nameValuePairs);
}
