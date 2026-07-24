import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhxvgwtgyoiknezxomym.supabase.co";

const supabaseKey = "sb_publishable_QzVB0wqeSNPi-sX4KQM1IQ_rIHwH6Nz";
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);