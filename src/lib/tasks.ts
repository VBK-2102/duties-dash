import { supabase } from './supabase';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date: string;
  user_id: string;
}

export const tasksService = {
  async createTask(task: Omit<Task, 'id' | 'user_id'>) {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ ...task, user_id: userData.user.id }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getTasks() {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userData.user.id)
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data;
  },

  async updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'user_id'>>) {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteTask(id: string) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};