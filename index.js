const core = require('@actions/core');
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');

const assumeRole = async () => {
  try {
    // Gather GitHub Actions inputs
    const access_key_id     = core.getInput('access-key-id');
    const secret_access_key = core.getInput('secret-access-key');
    const duration_seconds  = core.getInput('duration-seconds');
    const role_arn          = core.getInput('role-arn');
    const role_session_name = core.getInput('role-session-name');
    const region            = core.getInput('region') || process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || 'us-east-1';
    const credentials       = { accessKeyId: access_key_id, secretAccessKey: secret_access_key }

    // Create STS client
    const sts = new STSClient({ credentials: credentials, region: region });

    // Assume role with STS
    const res = await sts.send(new AssumeRoleCommand({
      RoleArn:         role_arn,
      RoleSessionName: role_session_name,
      DurationSeconds: duration_seconds,
    }))

    // Export ENV
    core.setSecret(res.Credentials.AccessKeyId);
    core.setSecret(res.Credentials.SecretAccessKey);
    core.setSecret(res.Credentials.SessionToken);
    core.exportVariable('AWS_ACCESS_KEY_ID',     res.Credentials.AccessKeyId);
    core.exportVariable('AWS_SECRET_ACCESS_KEY', res.Credentials.SecretAccessKey);
    core.exportVariable('AWS_SESSION_TOKEN',     res.Credentials.SessionToken);
  } catch (error) {
    core.error(error);
  }
}

const main = async () => {
  try {
    await assumeRole();
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
