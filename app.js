// app.js

// Using the ES module version of the Supabase library
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// --- Supabase Configuration (Your Keys) ---
const SUPABASE_URL = 'https://yumjyvrirwszukjvibld.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bWp5dnJpcndzenVranZpYmxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MjUwMzIsImV4cCI6MjA3OTIwMTAzMn0.doBlPo74Oh_o-PSQvIKI4ChiOPhIdgvY6SLk47dzXOU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Handles user sign-in with email and password.
 * @param {string} email
 * @param {string} password
 * @returns {object} {success: boolean, error?: string}
 */
export async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        return { success: false, error: error.message };
    }

    // Success: Redirect to the admin page
    window.location.href = 'admin_section.html'; 
    return { success: true };
}

/**
 * Handles user sign-out.
 */
export async function signOut() {
    await supabase.auth.signOut();
    // Redirect to the login page after signing out
    window.location.href = 'login.html';
}


/**
 * Checks if a user is currently authenticated and handles redirection.
 * @param {boolean} requireAuth - If true, redirects logged-out users away.
 * @param {string} redirectPath - Path to redirect to if auth status conflicts with requireAuth.
 */
export async function checkAuthAndRedirect(requireAuth, redirectPath) {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
        console.error("Auth session error:", error);
        return;
    }

    const isLoggedIn = !!session;

    if (requireAuth && !isLoggedIn) {
        // Logged out, but accessing a protected page
        window.location.href = redirectPath;
    } else if (!requireAuth && isLoggedIn) {
        // Logged in, but accessing the login page (redirect to admin)
        window.location.href = 'admin_section.html'; 
    }
    
    // Return the session data for the admin page to use
    return session;
}
