package postgres

import (
	"crypto/tls"
	"fmt"
	"net/url"
	"strings"

	"github.com/go-pg/pg/v10"
)

var DB *pg.DB

func parseDBURI(uri string) (*pg.Options, error) {
	u, err := url.Parse(uri)
	if err != nil {
		return nil, err
	}
	host := u.Host
	if !strings.Contains(host, ":") {
		// If the port is missing, add the default PostgreSQL port (5432)
		host = fmt.Sprintf("%s:%d", host, 5432)
	}
	options := &pg.Options{
		Addr:     host,
		User:     u.User.Username(),
		Password: "",
		Database: u.Path[1:], // The path will contain "/<database>", so strip the leading "/".
	}

	if pass, ok := u.User.Password(); ok {
		options.Password = pass
	}

	if sslmode := u.Query().Get("sslmode"); sslmode == "require" {
		options.TLSConfig = &tls.Config{
			InsecureSkipVerify: false,
			ServerName:         u.Hostname(),
		}
	}

	return options, nil
}

func Connect(conn_uri string) {
	opt, err := parseDBURI(conn_uri)
	if err != nil {
		panic(err)
	}
	DB = pg.Connect(opt)
}

func Disconnect() {
	DB.Close()
}
