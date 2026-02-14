import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Fungsi ini KHUSUS dipanggil dari Server Component (layout.tsx atau page.tsx)
export async function getLoggedUserProfile() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select(`*, master_ruangan(nama_ruangan)`)
    .eq('id', user.id)
    .single();

  return profile;
}