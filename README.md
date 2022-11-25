# AWS Assume Role GitHub Action

Assume an AWS IAM role and export the credentials to your GitHub Action ENV.

```yaml
- uses: amancevice/aws-sts-assume-role@v1
  with:

    # Required
    access-key-id:     ${{ secrets.AWS_ACCESS_KEY_ID }}
    secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    role-arn:          ${{ secrets.AWS_ROLE_ARN }}

    # Optional
    role-session-name: "GitHub-Action"
    duration-seconds:  3600
```

## Roadmap

Implement all options available to `aws sts assume-role`
