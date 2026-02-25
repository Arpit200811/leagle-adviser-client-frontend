import { useState } from 'react';
import { toast } from 'react-hot-toast';
import api from '../../services/api';
import {
  HiOutlinePlusCircle,
  HiOutlineCreditCard,
  HiOutlineCalendar,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineQrcode,
  HiOutlineLightningBolt,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Button } from '../common';

const AddFundsCard = ({ onPaymentSuccess }) => {
  const [amount, setAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [upiId, setUpiId] = useState('');


  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.id = 'razorpay-sdk';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePay = async () => {
    if (paymentMethod !== 'card' && paymentMethod !== 'upi') {
      toast.error('Currently only Card and UPI are supported');
      return;
    }

    setLoading(true);

    if (!window.Razorpay) {
      const res = await loadRazorpay();
      if (!res) {
        toast.error('Razorpay SDK failed to load');
        setLoading(false);
        return;
      }
    }

    try {
      const orderRes = await api.post('/payments/create-order', { amount });
      const { id: order_id, currency } = orderRes.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
        amount: amount * 100,
        currency: currency,
        name: 'Legal Consultant',
        description: 'Wallet Recharge',
        order_id: order_id,
        handler: async (response) => {
          try {
            const verifyRes = await api.post('/payments/verify', { ...response, amount });
            if (verifyRes.data.success) {
              toast.success(`Successfully added ₹${amount} to your wallet!`);
              if (onPaymentSuccess) onPaymentSuccess();
            }
          } catch (err) {
            toast.error('Verification failed');
          }
        },
        prefill: { email: 'user@example.com', contact: '9999999999' },
        theme: { color: '#135bec' },
        modal: { ondismiss: () => setLoading(false) }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error('Failed to initiate payment');
      setLoading(false);
    }
  };

  const quickAmounts = [50, 100, 200];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-all flex flex-col h-full">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-slate-50 dark:border-slate-800 flex flex-col gap-2 text-left">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <HiOutlinePlusCircle className="text-2xl" />
          </div>
          Add Funds
        </h2>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest ml-13">
          Choose amount and payment method
        </p>
      </div>

      <div className="p-8 md:p-12 flex flex-col gap-12">
        {/* Amount Selection */}
        <div className="flex flex-col gap-6">
          <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1 text-left">
            Select Amount
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`relative h-20 rounded-2xl border-2 transition-all flex flex-col items-center justify-center font-black text-xl tracking-tighter ${amount === amt
                  ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/5'
                  : 'border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 text-slate-400 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
              >
                ${amt}
                {amt === 100 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    POPULAR
                  </div>
                )}
              </button>
            ))}

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                $
              </span>
              <input
                type="number"
                placeholder="Other"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="h-20 w-full rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 pl-8 pr-4 focus:ring-4 focus:ring-primary/5 focus:border-primary font-black text-xl transition-all outline-none placeholder:font-bold placeholder:text-sm placeholder:tracking-widest"
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-50 dark:bg-slate-800" />

        {/* Payment Method */}
        <div className="flex flex-col gap-8">
          <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
            Payment Method
          </label>

          <div className="flex p-1.5 bg-slate-50 dark:bg-slate-950/40 rounded-2xl w-fit border border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${paymentMethod === 'card'
                ? 'bg-white dark:bg-slate-800 shadow-md text-primary'
                : 'text-slate-400'
                }`}
            >
              Credit Card
            </button>

            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${paymentMethod === 'paypal'
                ? 'bg-white dark:bg-slate-800 shadow-md text-[#003087]'
                : 'text-slate-400'
                }`}
            >
              PayPal
            </button>

            <button
              onClick={() => setPaymentMethod('upi')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${paymentMethod === 'upi'
                ? 'bg-white dark:bg-slate-800 shadow-md text-primary'
                : 'text-slate-400'
                }`}
            >
              UPI
            </button>

            <button
              onClick={() => setPaymentMethod('qr')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${paymentMethod === 'qr'
                ? 'bg-white dark:bg-slate-800 shadow-md text-primary'
                : 'text-slate-400'
                }`}
            >
              QR Code
            </button>
          </div>


          {/* Card Inputs */}
          {paymentMethod === 'card' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="md:col-span-2">
                <Input label="Card Number" placeholder="0000 0000 0000 0000" icon={<HiOutlineCreditCard />} />
              </div>
              <Input label="Expires on (Month / Year)" placeholder="MM / YY" icon={<HiOutlineCalendar />} />
              <Input label="Security Code (3 digits on back)" placeholder="123" icon={<HiOutlineLockClosed />} />
              <div className="md:col-span-2">
                <Input label="Area Pin Code / Zip Code" placeholder="e.g. 110001" icon={<HiOutlineLocationMarker />} />
              </div>
            </div>
          )}

          {/* UPI Input */}
          {paymentMethod === 'upi' && (
            <div className="flex flex-col gap-6 text-left">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col gap-2">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Fast & Secure UPI</p>
                <p className="text-sm text-slate-500 font-medium">Enter your UPI ID (VPA) to receive a payment request on your mobile app.</p>
              </div>
              <Input
                label="UPI ID / VPA"
                placeholder="yoursname@bank"
                icon={<HiOutlineLightningBolt />}
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Example: username@okhdfcbank, 9876543210@upl</p>
            </div>
          )}

          {/* QR Code */}
          {paymentMethod === 'qr' && (
            <div className="flex flex-col items-center gap-8 py-4">
              <div className="p-8 bg-white rounded-3xl shadow-xl border-4 border-slate-50 relative group">
                <div className="size-48 bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Simulated QR Code using CSS/Icons */}
                  <HiOutlineQrcode className="text-slate-900 size-40 opacity-90 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                </div>
                {/* Scan line animation */}
                <motion.div
                  initial={{ top: 0 }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-8 right-8 h-0.5 bg-primary/30 z-10"
                />
              </div>

              <div className="text-center flex flex-col gap-3">
                <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Scan with any UPI App</p>
                <div className="flex items-center justify-center gap-4 grayscale opacity-70">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">GPay • PhonePe • Paytm • BHIM</span>
                </div>
              </div>
            </div>
          )}

          {/* Save Card Toggle (Only for Card) */}
          {paymentMethod === 'card' && (
            <button
              onClick={() => setIsSaving((prev) => !prev)}
              className="flex items-center gap-3 w-fit cursor-pointer group"
            >
              <div
                className={`size-6 rounded-lg border-2 flex items-center justify-center transition-all ${isSaving
                  ? 'bg-primary border-primary shadow-lg shadow-primary/20'
                  : 'border-slate-200 dark:border-slate-700'
                  }`}
              >
                {isSaving && <HiOutlineCheckCircle className="text-white text-lg" />}
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">
                Save card for future transactions
              </span>
            </button>
          )}
        </div>


        {/* Summary & Pay */}
        <Button
          onClick={handlePay}
          loading={loading}
          disabled={paymentMethod === 'upi' && !upiId}
          className="w-full h-16 rounded-2xl shadow-2xl shadow-primary/30 tracking-[0.2em]"
          icon={<HiOutlineLockClosed className="text-xl" />}
        >
          {paymentMethod === 'qr' ? 'I have Scanned & Paid' : `Recharge $${amount.toFixed(2)}`}
        </Button>

      </div>
    </div>
  );
};

const Input = ({ label, placeholder, icon, value, onChange }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
        <span className="text-xl">{icon}</span>
      </div>
      <input
        className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-bold placeholder:text-slate-300 text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);


export default AddFundsCard;
