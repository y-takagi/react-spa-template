# # AGENTS.md

このファイルはリポジトリのコードを扱うAIエージェントへのガイドラインです。

## プロジェクト概要

使用パッケージは @package.json、利用可能なコマンドは @Makefile を参照。

## アーキテクチャ

### ルーティング

- **TanStack Router** によるファイルベースルーティング
- ルート定義: `src/routes/` ディレクトリ
- 認証が必要なルートは `src/routes/_authenticated/` 配下に配置
- `src/routeTree.gen.ts` は自動生成（編集しないこと）

### 状態管理

- **Jotai** によるグローバル状態管理
- アプリ全体または複数コンポーネントで共有する状態
- それ以外のローカル状態には `useState` を使う

### データ取得

- **TanStack Query** によるAPI通信
- API定義: `src/api/`（Orvalにより自動生成）

#### ページロード時のデータ取得パターン（route-level fetching）

ページロード時のデータ取得は以下のパターンに統一する。

**1. `hooks.ts` にデータ取得・atom定義を集約する**

```typescript
// hooks.ts
const fooAtom = atom<Foo[]>();
export const routeAtoms = {
  fooAtom,
} as const;

export function useRouteLoader() {
  const setFoo = useSetAtom(routeAtoms.fooAtom);
  const fooQuery = useGetFoo();

  useEffect(() => {
    setFoo(fooQuery.data?.data.foo ?? []);
  }, [setFoo, fooQuery.data]);

  return { isLoading: fooQuery.isLoading };
}

export function useRefetch() {
  return useGetFoo({ query: { enabled: false } }).refetch;
}
```

**2. `index.tsx` で `ScopeProvider` によりatomをスコープする**

```typescript
// index.tsx
export const Route = createFileRoute('/_authenticated/foo/')({
  component: () => (
    <ScopeProvider atoms={Object.values(routeAtoms)}>
      <FooPage />
    </ScopeProvider>
  ),
});
```

### ディレクトリ構造

- `src/`
  - `assets/` : 画像ファイル等
  - `components/` : 共通コンポーネント群
    - `ui` : shadcn/uiのコンポーネント
    - `common` : ドメインコードを含まないコンポーネント
    - `layout` : Layoutコンポーネント
  - `api/` : 自動生成された API 通信の処理および型
  - `domains/` : 特定ドメインに紐づいた再利用可能なロジック
  - `hooks/` : 副作用を含む共通関数群
  - `utils/` : 副作用を含まない共通関数群
  - `routes/` : Tanstack Routerのルート定義ディレクトリ
  - `app.tsx` : ルートコンポーネント
  - `env.ts` : 環境変数
  - `main.tsx` : Reactの起動処理
