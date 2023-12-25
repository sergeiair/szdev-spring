package com.sz.dev.auth.cognito;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.AnonymousAWSCredentials;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.GetUserRequest;
import com.amazonaws.services.cognitoidp.model.GetUserResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;


@Slf4j
@Service
@Configuration
public class CognitoAuthService {

    private final HashMap<String, Boolean> validated = new HashMap<>();

    @Value("${amazon.aws.region}")
    private String region;

    @Value("${amazon.aws.clientId}")
    private String clientId;

    @Value("${amazon.aws.userPoolId}")
    private String userPoolId;

    private final AnonymousAWSCredentials creds = new AnonymousAWSCredentials();

    private AWSCognitoIdentityProvider provider;

    private void maybeInit() {
        if (provider == null) {
            provider = AWSCognitoIdentityProviderClientBuilder.standard()
                    .withCredentials(new AWSStaticCredentialsProvider(creds))
                    .withRegion(region)
                    .build();
        }

    }

    public boolean validate(String accessToken) {
        maybeInit();

        if (validated.containsKey(accessToken)) {
            return true;
        } else {



            try {
                GetUserRequest request = new GetUserRequest();
                request.withAccessToken(accessToken);

                GetUserResult result = provider.getUser(request);
                validated.put(accessToken, true);

                return true;
            } catch (Exception e) {
                return false;
            }
        }



    }

}
