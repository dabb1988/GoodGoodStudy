package com.liubo;

public class HashMapImitate {
//	public V put(K key, V value) {
//	    // 当插入第一个元素的时候，需要先初始化数组大小
//	    if (table == EMPTY_TABLE) {
//	        inflateTable(threshold);
//	    }
//	    // 如果 key 为 null，感兴趣的可以往里看，最终会将这个 entry 放到 table[0] 中
//	    if (key == null)
//	        return putForNullKey(value);
//	    // 1. 求 key 的 hash 值
//	    int hash = hash(key);
//	    // 2. 找到对应的数组下标
//	    int i = indexFor(hash, table.length);
//	    // 3. 遍历一下对应下标处的链表，看是否有重复的 key 已经存在，
//	    //    如果有，直接覆盖，put 方法返回旧值就结束了
//	    for (Entry<K,V> e = table[i]; e != null; e = e.next) {
//	        Object k;
//	        if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {
//	            V oldValue = e.value;
//	            e.value = value;
//	            e.recordAccess(this);
//	            return oldValue;
//	        }
//	    }
//
//	    modCount++;
//	    // 4. 不存在重复的 key，将此 entry 添加到链表中，细节后面说
//	    addEntry(hash, key, value, i);
//	    return null;
//	}
}
