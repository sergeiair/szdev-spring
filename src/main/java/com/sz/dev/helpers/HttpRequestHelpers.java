package com.sz.dev.helpers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class HttpRequestHelpers {
    public static String getLastPartOfUrl(HttpServletRequest request) {
        String url = request.getRequestURI();
        String[] urlParts = url.split("/");

        return urlParts[urlParts.length - 1] != null ?
                urlParts[urlParts.length - 1] :
                "";
    }

    public static String cleanPathVariable(String inputString) {
        if (inputString == null) return "";

        return inputString.replaceAll("[^0-9a-zA-Z_]", "");
    }
}



