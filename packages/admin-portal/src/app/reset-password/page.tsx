'use client'

import { useState } from 'react'
import OtpVerification from './components/OtpVerification';
import PasswordCreation from './components/PasswordCreation';

function Page() {
    const [step, setStep] = useState<number>(1);
  return (
    <>
    {step === 1 && <OtpVerification setNext={() => setStep(2)} />}
    {step === 2 && <PasswordCreation />}
    </>
  )
}

export default Page