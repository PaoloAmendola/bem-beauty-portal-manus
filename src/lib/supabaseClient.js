import { createClient } from '@supabase/supabase-js'

// Temporarily hardcoding values for debugging environment variable issue
const VITE_SUPABASE_URL = 'https://xqbtdowdeumqwtsnruzl.supabase.co';
const VITE_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxYnRkb3dkZXVtcXd0c25ydXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTIxOTUsImV4cCI6MjA2OTM4ODE5NX0.mifJXBGKYWODBNQzY5_xoQcsDoNMS8PCNPdcp_au8Aw';

console.log('Supabase URL (hardcoded):', VITE_SUPABASE_URL);
console.log('Supabase Anon Key (hardcoded):', VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, VITE_SUPABASE_ANON_KEY);


