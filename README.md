# AWS Assume Role GitHub Action

Assume an AWS IAM role and export the credentials to your GitHub Action ENV.

```yaml
- uses: amancevice/aws-sts-assume-role@main
  with:
    
    # Required
    access_key_id:     ${{ secrets.AWS_ACCESS_KEY_ID }}
    secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    role_arn:          ${{ secrets.AWS_ROLE_ARN }}
    
    # Optional
    role_session_name: "GitHub-Action"
    duration_seconds:  3600
```

## Roadmap

Implement all options available to `aws sts assume-role`
