// canvas指纹
export const createFingerprint = () => {
    const canvas = document.getElementById('anchor-uuid') as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    context.font = '18pt Arial'
    context.textBaseline = 'top'
    context.fillText('hello, user.', 2, 2)
    const fingerprint = canvas.toDataURL('image/jpeg')

    // hash
    const secret = 'nice'
    const hash = `sha256${secret}${fingerprint}hex`
    return hash
}