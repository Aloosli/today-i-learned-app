import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gnofugconpdctdawnqdw.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdub2Z1Z2NvbnBkY3RkYXducWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMDIyOTYsImV4cCI6MTk4NjY3ODI5Nn0.D1qjq6utEnGZdGiF71XOBh3RwC8mKJwbkXTvGd-ca9k';
  
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;