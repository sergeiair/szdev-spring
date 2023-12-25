

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
    published   BOOLEAN,
    url_alias   VARCHAR(255),
    locale_code VARCHAR(3)
);

CREATE TABLE IF NOT EXISTS szdev_tags
(
    id
                SERIAL
        PRIMARY
            KEY,
    published
        BOOLEAN,
    content     VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS short_read_tags
(
    short_read_id INT REFERENCES szdev_short_reads (id) ON DELETE CASCADE ,
    tag_id INT,
    description     VARCHAR(255),
    PRIMARY KEY (short_read_id, tag_id)
);
