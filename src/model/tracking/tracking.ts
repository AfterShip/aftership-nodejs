import { Checkpoint } from '../checkpoint/checkpoint';
import { EstimatedDeliveryDate } from '../estimated_delivery_date/estimated_delivery_date';
import { DeliveryStatus } from './delivery_status';
import { DeliveryType } from './delivery_type';

/**
 * Tracking Object
 */
export interface Tracking {
  /**
   * Hash describes the tracking information.
   */
  tracking?: {
    /**
     * Date and time of the tracking created.
     */
    created_at?: string;

    /**
     * Date and time of the tracking last updated.
     */
    updated_at?: string;

    /**
     * A unique identifier generated by AfterShip for the tracking.
     */
    id?: string;

    /**
     * The postal code of receiver's address. Required by some couriers, such asdeutsch-post
     */
    tracking_postal_code?: string;

    /**
     * Shipping date inYYYYMMDDformat. Required by some couriers, such asdeutsch-post
     */
    tracking_ship_date?: string;

    /**
     * Account number of the shipper for a specific courier. Required by some couriers, such asdynamic-logistics
     */
    tracking_account_number?: string;

    /**
     * Origin Country of the shipment for a specific courier. Required by some couriers, such asdhl
     */
    tracking_origin_country?: string;

    /**
     * Destination Country of the shipment for a specific courier. Required by some couriers, such aspostnl-3s
     */
    tracking_destination_country?: string;

    /**
     * Located state of the shipment for a specific courier. Required by some couriers, such asstar-track-courier
     */
    tracking_state?: string;

    /**
     * Key of the shipment for a specific courier. Required by some couriers, such assic-teliway
     */
    tracking_key?: string;

    /**
     * Tracking number.
     */
    tracking_number: string;

    /**
     * Unique code of courier. Get courier slug here
     */
    slug?: string;

    /**
     * Whether or not AfterShip will continue tracking the shipments.
     * Value is false when tag (status) is Delivered, Expired, or further updates for 30 days since last update.
     */
    active?: boolean;

    /**
     * Google cloud message registration IDs to receive the push notifications.
     * Accept either array or comma separated as input.
     */
    android?: string | [string];

    /**
     * Custom fields of the tracking.
     */
    custom_fields?: object;

    /**
     * Customer name of the tracking.
     */
    customer_name?: string;

    /**
     * Total delivery time in days.
     * - Difference of 1st checkpoint time and delivered time for delivered shipments
     * - Difference of 1st checkpoint time and current time for non-delivered shipments
     * value as 0 for pending shipments or delivered shipment with only one checkpoint.
     */
    delivery_time?: number;

    /**
     * Destination country of the tracking. ISO Alpha-3 (three letters).
     * If you use postal service to send international shipments,
     * AfterShip will automatically get tracking results from destination postal service based on destination country.
     */
    destination_country_iso3?: string;

    /**
     * Destination country of the tracking detected from the courier.
     * ISO Alpha-3 (three letters). Value will be null if the courier doesn't provide the destination country.
     */
    courier_destination_country_iso3?: string;

    /**
     * Email address(es) to receive email notifications. Comma separated for multiple values.
     */
    emails?: [string];

    /**
     * Expected delivery date (nullable).
     * Available format:YYYY-MM-DD,YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+TIMEZONE
     */
    expected_delivery?: string;

    /**
     * Apple iOS device IDs to receive the push notifications.
     * Accept either array or comma separated as input.
     */
    ios?: string | [string];

    /**
     * Text field for order ID
     */
    order_id?: string;

    /**
     * Text field for order path
     */
    order_id_path?: string;

    /**
     * Text field for order number
     */
    order_number?: string;

    /**
     * Date and time of the order created
     */
    order_date?: string;

    /**
     * Origin country of the tracking. ISO Alpha-3 (three letters).
     */
    origin_country_iso3?: string;

    /**
     * The token to generate the direct tracking link:
     * https://yourusername.aftership.com/unique_token or https://www.aftership.com/unique_token
     */
    unique_token?: string;

    /**
     * Number of packages under the tracking (if any).
     */
    shipment_package_count?: number;

    /**
     * Shipment type provided by carrier (if any).
     */
    shipment_type?: string;

    /**
     * Shipment weight provied by carrier (if any)
     */
    shipment_weight?: number;

    /**
     * Weight unit provied by carrier, either in kg or lb (if any)
     */
    shipment_weight_unit?: string;

    /**
     * Date and time the tracking was last updated
     */
    last_updated_at?: string;

    /**
     * Date and time the tracking was picked up
     */
    shipment_pickup_date?: string;

    /**
     * shipment_delivery_date
     */
    shipment_delivery_date?: string;

    /**
     * Phone number(s) subscribed to receive sms notifications. Comma separated for multiple values
     */
    subscribed_smses?: [string];

    /**
     * Email address(es) subscribed to receive email notifications. Comma separated for multiple values
     */
    subscribed_emails?: [string];

    /**
     * Signed by information for delivered shipment (if any).
     */
    signed_by?: string;

    /**
     * Phone number(s) to receive sms notifications.
     * The phone number(s) to receive sms notifications.
     * Phone number should begin with `+` and `Area Code` before phone number.
     * Comma separated for multiple values.
     */
    smses?: [string];

    /**
     * Source of how this tracking is added.
     */
    source?: string;

    /**
     * Current status of tracking.
     * Values include: Pending,InfoReceived,InTransit,OutForDelivery,AttemptFail,
     * Delivered,AvailableForPickup,Exception,Expired
     */
    tag?: DeliveryStatus;

    /**
     * Current subtag of tracking.
     */
    subtag?: string;

    /**
     * Normalized tracking message.
     */
    subtag_message?: string;

    /**
     * Title of the tracking.
     */
    title?: string;

    /**
     * Number of attempts AfterShip tracks at courier's system.
     */
    tracked_count?: number;

    /**
     * Indicates if the shipment is trackable till the final destination.
     * Three possible values: true,true,null.
     */
    last_mile_tracking_supported?: boolean | null;

    /**
     * Store, customer, or order language of the tracking.
     */
    language?: string | null;

    /**
     * Whether or not the shipment is returned to sender.
     * Value istruewhen any of its checkpoints has subtagException_010(returning to sender)
     * orException_011(returned to sender). Otherwise value isfalse
     */
    return_to_sender?: boolean;

    /**
     * Promised delivery date of an order inYYYY-MM-DDformat.
     */
    order_promised_delivery_date?: string;

    /**
     * Shipment delivery type
     */
    delivery_type?: DeliveryType;

    /**
     * Shipment pickup location for receiver
     */
    pickup_location?: string;

    /**
     * Shipment pickup note for receiver
     */
    pickup_note?: string;

    /**
     * Official tracking URL of the courier (if any)
     */
    courier_tracking_link?: string;

    /**
     * date and time of the first attempt by the carrier to deliver the package to the addressee
     * Available format:YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+TIMEZONE
     */
    first_attempted_at?: string | null;

    /**
     * Array of Hash describes the checkpoint information.
     */
    checkpoints?: [Checkpoint];

    /**
     * Estimated delivery time of the shipment provided by AfterShip, indicate when the shipment should arrive.
     */
    aftership_estimated_delivery_date?: EstimatedDeliveryDate;
  };
}
