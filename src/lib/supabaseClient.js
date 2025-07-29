import { createClient } from '@supabase/supabase-js'

// Temporarily hardcoding values for debugging environment variable issue
const supabaseUrl = 'https://avrhqkufesbrbctdujfn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cmhxa3VmZXNicmJjdGR1amZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MjMzMjksImV4cCI6MjA2NjM5OTMyOX0.xQKT1oEbF8b1FsPwtUWhwYBiEgs8bsWSoNZy-UXr7Bc';

console.log('Supabase URL (hardcoded):', supabaseUrl);
console.log('Supabase Anon Key (hardcoded):', supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


