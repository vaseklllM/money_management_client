/** Повертає текст помилки */
function getFirstMessage(error: any): string {
  if (Array.isArray(error.graphQLErrors) && error.graphQLErrors.length > 0) {
    const resMessages = error.graphQLErrors[0].extensions.exception?.response?.message
    if (Array.isArray(resMessages) && resMessages.length > 0) {
      return resMessages[0]
    } else {
      return error.graphQLErrors[0].message
    }
  }
}

const err = {
  getFirstMessage,
}

export default err
