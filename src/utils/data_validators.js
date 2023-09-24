const DataValidators = {
    "DateDatatype": {
        "type": "string",
        "pattern": "^(((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30)))(Z|[+-][0-9]{2}:[0-9]{2})?$"
    },
    "DateTimeWithTimezoneDatatype": {
        "type": "string",
        "format": "date-time",
        "pattern": "^(((2000|2400|2800|(19|2[0-9](0[48]|[2468][048]|[13579][26])))-02-29)|(((19|2[0-9])[0-9]{2})-02-(0[1-9]|1[0-9]|2[0-8]))|(((19|2[0-9])[0-9]{2})-(0[13578]|10|12)-(0[1-9]|[12][0-9]|3[01]))|(((19|2[0-9])[0-9]{2})-(0[469]|11)-(0[1-9]|[12][0-9]|30)))T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]*[1-9])?(Z|(-((0[0-9]|1[0-2]):00|0[39]:30)|\\+((0[0-9]|1[0-4]):00|(0[34569]|10):30|(0[58]|12):45)))$"
    },
    "EmailAddressDatatype": {
        "type": "string",
        "format": "email",
        "pattern": "^.+@.+$"
    },
    "StringDatatype": {
        "type": "string",
        "pattern": "^\\S(.*\\S)?$"
    },
    "TokenDatatype": {
        "type": "string",
        //"pattern": new RegExp(/^(\p{L}|_)(\p{L}|\p{N}|[.\-_])*$/)
        "pattern": new RegExp(/^\p{L}$/)
    },
    "URIDatatype": {
        "type": "string",
        "format": "uri",
        "pattern": "^[a-zA-Z][a-zA-Z0-9+\\-.]+:.+$"
    },
    "UUIDDatatype": {
        "type": "string",
        "description": "A type 4 ('random' or 'pseudorandom') or type 5 UUID per RFC 4122.",
        "pattern": "^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[45][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$"
    }
}
export default DataValidators;