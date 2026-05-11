-- Transaction type
CREATE TYPE transaction_type AS ENUM ('income', 'expense');

-- Category type
CREATE TYPE category_type AS ENUM ('income', 'expense');

-- Recurring frequency
CREATE TYPE recurring_frequency AS ENUM ('daily', 'weekly', 'monthly', 'yearly');

-----------------------------------------------------------------------------------------------------

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    last_login_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(15,2) DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_accounts_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    type category_type NOT NULL,
    color VARCHAR(20),
    icon VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_categories_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    account_id UUID NOT NULL,
    category_id UUID NOT NULL,

    type transaction_type NOT NULL,
    amount DECIMAL(15,2) NOT NULL CHECK (amount >= 0),
    note TEXT,

    transaction_date DATE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_transactions_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_transactions_account
        FOREIGN KEY (account_id) REFERENCES accounts(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_transactions_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE SET NULL
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE recurring_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    account_id UUID NOT NULL,
    category_id UUID NOT NULL,

    type transaction_type NOT NULL,
    amount DECIMAL(15,2) NOT NULL,

    frequency recurring_frequency NOT NULL,
    next_run_date DATE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_recurring_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_recurring_account
        FOREIGN KEY (account_id) REFERENCES accounts(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_recurring_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE SET NULL
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    category_id UUID NOT NULL,

    amount DECIMAL(15,2) NOT NULL,
    month VARCHAR(7) NOT NULL, -- format YYYY-MM

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_budgets_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_budgets_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE,

    CONSTRAINT unique_budget_per_month
        UNIQUE (user_id, category_id, month)
);

-----------------------------------------------------------------------------------------------------

CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    transaction_id UUID NOT NULL,
    file_url TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_attachments_transaction
        FOREIGN KEY (transaction_id) REFERENCES transactions(id)
        ON DELETE CASCADE
);

-----------------------------------------------------------------------------------------------------

-- Dashboard & Chart
CREATE INDEX idx_transactions_user_date 
ON transactions(user_id, transaction_date);

-- Filter cepat
CREATE INDEX idx_transactions_category 
ON transactions(category_id);

CREATE INDEX idx_transactions_account 
ON transactions(account_id);

-- Recurring job scheduler
CREATE INDEX idx_recurring_next_run 
ON recurring_transactions(next_run_date);

-- Budget lookup
CREATE INDEX idx_budgets_month 
ON budgets(user_id, month);

-----------------------------------------------------------------------------------------------------

