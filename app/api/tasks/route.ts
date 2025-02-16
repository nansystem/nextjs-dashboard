import { NextResponse } from 'next/server';
import { tasks, Task } from '@/app/lib/tasksStore';

export async function GET() {
  // タスク一覧を返す
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newTask: Task = {
      id: Date.now(), // 簡易的なID生成
      title: data.title,
      completed: false,
    };
    tasks.push(newTask);
    return NextResponse.json(newTask, { status: 201 });
  } catch ({}) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id, 10);
  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }
  try {
    const data = await request.json();
    // 既存タスクの内容を更新
    tasks[index] = { ...tasks[index], ...data };
    return NextResponse.json(tasks[index]);
  } catch ({}) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id, 10);
  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }
  const deletedTask = tasks.splice(index, 1)[0];
  return NextResponse.json({ message: 'Task deleted', task: deletedTask });
}
