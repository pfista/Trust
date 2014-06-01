var Remote = ripple.Remote;

var remote = new Remote({
    trusted:        true,
    local_signing:  true,
    local_fee:      true,
    fee_cushion:    1.5,
    servers: [
        {
            host:   'localhost',
            port:   6006,
            secure: false
        }
    ]
});



