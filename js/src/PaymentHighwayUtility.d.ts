export declare class PaymentHighwayUtility {
    /**
     * Cryptographically strong pseudo random number generator.
     *
     * @return String UUID.
     */
    static createRequestId(): string;
    /**
     * Request timestamp in ISO 8601 combined date and time in UTC.
     *
     * @return String timestamp Example: 2014-09-18T10:32:59Z
     */
    static getUtcTimestamp(): string;
}
