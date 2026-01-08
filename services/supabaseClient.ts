
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wqoqhaeqzaupxeeqdjyr.supabase.co';
const supabaseAnonKey = 'sb_publishable_ZFK_XC2L6IU1rPUU0Qpz4w_5kHjrje8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
