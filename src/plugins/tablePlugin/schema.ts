import * as violations from '@zykj/slate-schema-violations';
import { message } from 'antd';

export default {
  blocks: {
    table: {
      nodes: [
        {
          match: { type: 'table-body' },
        },
      ],
      normalize: (change: any, error: any) => {
        try {
          switch (error.code) {
            case violations.CHILD_TYPE_INVALID:
              change = change.wrapBlockByKey(error.child.key, 'table-body');
              return change;
            default:
              return null;
          }
        } catch (err) {
          message.error(err.message);
        }
        return change;
      },
    },
  },
};
