import twilio from "twilio";

export const GenerateOtp = () => {

    const otp = Math.floor(10000 + Math.random() * 900000);
    let expiry = new Date()
    expiry.setTime(new Date().getTime() + (30 * 60 * 1000));

    return {otp, expiry};
}

export const onRequestOTP = async(otp: number, toPhoneNumber: string) => {

    const accountSid = "ACab1e91b82e0c3e9c88bc8a2da4856d96";
    const authToken = "8614e2e33d40210fe2ab20740b01a899";
    const client = twilio(accountSid, authToken);

    const response = await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+13188148533',
        to: `${toPhoneNumber}` // recipient phone number // Add country before the number
    })

    return response;
}

/* ------------------- Payment --------------------- */