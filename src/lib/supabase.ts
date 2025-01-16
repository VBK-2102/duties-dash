import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twbqumfpfnuqtdhdybrm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3YnF1bWZwZm51cXRkaGR5YnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNDAzMDUsImV4cCI6MjA1MjYxNjMwNX0.3wNwP8qGvlyi0Hqihvda0NmXHEwcZCYgUMQLapQFJo4';

export const supabase = createClient(supabaseUrl, supabaseKey);