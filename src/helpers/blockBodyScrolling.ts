export default (isBlocked: boolean) => document?.body.style.setProperty('overflow', isBlocked ? 'hidden' : null)
