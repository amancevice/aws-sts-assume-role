# AWS Assume Role GitHub Action

[![test](https://img.shields.io/github/actions/workflow/status/amancevice/aws-sts-assume-role/test.yaml?logo=github&style=flat-square)](https://github.com/amancevice/aws-sts-assume-role/actions/workflows/test.yaml)
[![maintainability](https://img.shields.io/codeclimate/maintainability/amancevice/aws-sts-assume-role?logo=code-climate&style=flat-square)](https://codeclimate.com/github/amancevice/aws-sts-assume-role/maintainability)
<!-- [![coverage](https://img.shields.io/codeclimate/coverage/amancevice/aws-sts-assume-role?logo=code-climate&style=flat-square)](https://codeclimate.com/github/amancevice/aws-sts-assume-role/test_coverage) -->

Assume an AWS IAM role and export the credentials to your GitHub Action ENV.

```yaml
- uses: amancevice/aws-sts-assume-role@v1
  with:

    # Required
    access-key-id:     ${{ secrets.AWS_ACCESS_KEY_ID }}
    secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    role-arn:          ${{ secrets.AWS_ROLE_ARN }}

    # Optional
    region:            us-west-2
    role-session-name: GitHub-Action
    duration-seconds:  3600
```

## Roadmap

Implement all options available to `aws sts assume-role`
