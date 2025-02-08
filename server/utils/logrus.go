package utils

import (
	"fmt"
	"math"
	"net/http"
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/gin-gonic/gin"
)

func LogrusLogger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		startTime := time.Now()
		ctx.Next()
		endTime := time.Since(startTime)
		latencyTime := int(math.Ceil(float64(endTime.Nanoseconds()) / 1000000.0))
		reqMethod := ctx.Request.Method
		reqUri := ctx.Request.RequestURI
		statusCode := ctx.Writer.Status()
		userId := ctx.Request.Header.Get("X-Custiv-Refid")
		entry := log.WithFields(log.Fields{
			"method":    reqMethod,
			"route":     reqUri,
			"status":    statusCode,
			"latency":   fmt.Sprintf("%dms", latencyTime),
			"userId":    userId,
			"timestamp": time.Now().Format("02/Jan/2006:15:04:05 -0700"),
		})
		if len(ctx.Errors) > 0 {
			entry.Error(ctx.Errors.ByType(gin.ErrorTypePrivate).String())
		} else {
			// msg := fmt.Sprintf("%s - %s [%s] \"%s %s\" %d %d \"%s\" \"%s\" (%dms)", clientIP, hostname, time.Now().Format(timeFormat), c.Request.Method, path, statusCode, dataLength, referer, clientUserAgent, latency)
			msg := ""
			if statusCode >= http.StatusInternalServerError {
				entry.Error(msg)
			} else if statusCode >= http.StatusBadRequest {
				entry.Warn(msg)
			} else {
				entry.Info(msg)
			}
		}
		ctx.Next()
	}
}
