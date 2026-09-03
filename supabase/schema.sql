-- ====================================================================
-- INVESTILENS SUPABASE DATABASE SCHEMA
-- Execute this SQL in your Supabase Dashboard -> SQL Editor -> Run
-- ====================================================================

-- 1. Create Profiles Table (Linked to Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Create Research History Table (Stores full research dossiers and scoring)
CREATE TABLE IF NOT EXISTS public.research_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  ticker TEXT NOT NULL,
  company_name TEXT NOT NULL,
  market TEXT DEFAULT 'United States',
  sector TEXT,
  score INTEGER NOT NULL,
  rating TEXT NOT NULL,
  confidence TEXT DEFAULT 'HIGH',
  summary TEXT,
  params JSONB DEFAULT '{}'::jsonb,
  report_data JSONB,
  stock_data JSONB,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Create User Watchlist Table
CREATE TABLE IF NOT EXISTS public.user_watchlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  ticker TEXT NOT NULL,
  name TEXT NOT NULL,
  market TEXT DEFAULT 'United States',
  price NUMERIC,
  change TEXT,
  score INTEGER,
  rating TEXT,
  added_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE (user_id, ticker)
);

-- 4. Enable Row Level Security (RLS) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_watchlist ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for Profiles
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 6. RLS Policies for Research History
CREATE POLICY "Users can view only their own research history" 
  ON public.research_history FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own research history" 
  ON public.research_history FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own research history" 
  ON public.research_history FOR DELETE USING (auth.uid() = user_id);

-- 7. RLS Policies for Watchlist
CREATE POLICY "Users can view only their own watchlist" 
  ON public.user_watchlist FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own watchlist items" 
  ON public.user_watchlist FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own watchlist items" 
  ON public.user_watchlist FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own watchlist items" 
  ON public.user_watchlist FOR DELETE USING (auth.uid() = user_id);

-- 8. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_research_history_user_id ON public.research_history(user_id);
CREATE INDEX IF NOT EXISTS idx_research_history_created_at ON public.research_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_research_history_ticker ON public.research_history(ticker);
CREATE INDEX IF NOT EXISTS idx_user_watchlist_user_id ON public.user_watchlist(user_id);

-- 9. Automatic Profile Creation Trigger on New User Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Investor'),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ====================================================================
-- SCHEMA CREATION COMPLETE
-- ====================================================================
