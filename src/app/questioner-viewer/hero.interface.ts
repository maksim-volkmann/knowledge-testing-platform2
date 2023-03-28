export interface Question {
  id: number;
  type: 'single' | 'multiple' | 'free-form';
  text: string;
  options?: string[];
  answer?: string | string[];
}