import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ubzvekxcouzdjpnjtqza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVienZla3hjb3V6ZGpwbmp0cXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MzcxNDQsImV4cCI6MTk5NDExMzE0NH0.vVngez1fAHg4jGE3LdfL6nLfC7sYiKQsDf3UMglIVuc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
