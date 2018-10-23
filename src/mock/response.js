export function getSuccessResp (data, msg) {
  let resp = getResp(process.env.SYS_CODE_SUCCESS, msg)
  resp.data = data
  return resp
}

export function getFailedResp (msg) {
  return getResp(1, msg)
}

function getResp (code, msg) {
  return {
    code,
    msg
  }
}
