const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken(token) {
        const secretKey = "CT4wsKhNaWUNBWV3qHTHiLYoMRpRK4n2"
        if(!token) {
            const response = {
                isVerified: false
            }
            return response
        }
        try {
            const decoded = jwt.verify(token, secretKey)
            const response = {
                isVerified: true,
                data: decoded
            }
            return response
            
        } catch (err) {
            const response = {
                isVerified: false,
                errorMessage: err
            }
            return response
        }
    }
}