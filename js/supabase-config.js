// ============================================
// 🔌 Supabase Configuration
// ============================================
// ⚠️ 아래 값을 본인의 Supabase 프로젝트 정보로 교체하세요!
const SUPABASE_URL = 'https://efbsznwgetzodihkbjzk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmYnN6bndnZXR6b2RpaGtianprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Nzg4MzAsImV4cCI6MjA5MjM1NDgzMH0.9qZaT4MBVNqHlg_2y9X-yI1clRrTr93aTBLMbwP1jfg';

// Supabase CDN
const { createClient } = supabase;

// 전역 Supabase 클라이언트
let supabaseClient = null;

function initSupabase() {
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}

// Toast 알림
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
