
import { supabase } from './supabaseClient';

export interface InquiryData {
  name: string;
  email: string;
  message: string;
}

export const submitInquiry = async (data: InquiryData) => {
  const { error } = await supabase
    .from('inquiries')
    .insert([
      {
        name: data.name,
        email: data.email,
        message: data.message,
      }
    ]);
  
  if (error) {
    console.error('Supabase Inquiry Error:', error);
    throw error;
  }
  
  return true;
};
