CREATE TABLE IF NOT EXISTS szdev_tags
(
    id
        SERIAL
        PRIMARY
            KEY,
    text
        VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS szdev_short_reads
(
    id
                SERIAL
        PRIMARY
            KEY,
    created_at
                DATE,
    modified_at
                DATE,
    title
                VARCHAR(255),
    preview     VARCHAR(255),

    content     TEXT,
    url_alias   VARCHAR(255),
    locale_code VARCHAR(3)
);
